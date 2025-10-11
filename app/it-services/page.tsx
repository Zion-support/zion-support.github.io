'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Server, 
  Shield, 
  Cloud, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Database, 
  Smartphone, 
  Globe, 
  Settings, 
  Users, 
  BarChart, 
  Lock, 
  Zap, 
  Headphones, 
  DollarSign, 
  Star, 
  Clock, 
  TrendingUp,
  Phone,
  Mail,
  Wifi,
  HardDrive,
  Cpu,
  Network
} from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      price: 'Starting at $1,500/month',
      features: [
        'Cloud migration planning',
        'Multi-cloud architecture',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        '99.9% uptime guarantee'
      ],
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      category: 'Infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      price: 'Starting at $2,000/month',
      features: [
        'Threat detection & response',
        'Security audits & assessments',
        'Compliance management',
        'Penetration testing',
        'Security training',
        'Incident response'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Ensure compliance with regulations',
        'Reduce security risks by 90%',
        '24/7 security monitoring'
      ],
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      category: 'Security'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored web and mobile applications built with modern technologies and best practices.',
      price: 'Starting at $3,000/project',
      features: [
        'Web application development',
        'Mobile app development',
        'API development & integration',
        'Database design & optimization',
        'UI/UX design',
        'Quality assurance testing'
      ],
      benefits: [
        'Custom solutions for your needs',
        'Modern, scalable architecture',
        'Faster time to market',
        'Ongoing support & maintenance'
      ],
      link: 'https://ziontechgroup.com/web-development',
      category: 'Development'
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and migration services for all major database systems.',
      price: 'Starting at $800/month',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Backup & recovery solutions',
        'Data migration services',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Ensure data security and compliance',
        'Reduce downtime to near zero',
        'Optimize storage costs'
      ],
      link: 'https://ziontechgroup.com/database-management',
      category: 'Data Management'
    },
    {
      icon: Network,
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security solutions for businesses of all sizes.',
      price: 'Starting at $1,200/month',
      features: [
        'Network design & implementation',
        'Firewall configuration',
        'VPN setup & management',
        'Wireless network solutions',
        'Network monitoring',
        'Security policy implementation'
      ],
      benefits: [
        'Secure, reliable network infrastructure',
        'Improved network performance',
        'Enhanced security posture',
        'Reduced network downtime'
      ],
      link: 'https://ziontechgroup.com/network-infrastructure',
      category: 'Infrastructure'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern development practices.',
      price: 'Starting at $5,000/app',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration'
      ],
      benefits: [
        'Reach customers on all devices',
        'Improved user engagement',
        'Faster app performance',
        'Easy maintenance and updates'
      ],
      link: 'https://ziontechgroup.com/mobile-development',
      category: 'Development'
    },
    {
      icon: Settings,
      title: 'IT Support & Managed Services',
      description: 'Comprehensive IT support including help desk, system administration, and proactive monitoring.',
      price: 'Starting at $500/month',
      features: [
        '24/7 help desk support',
        'System administration',
        'Proactive monitoring',
        'Software updates & patches',
        'Hardware maintenance',
        'User training & support'
      ],
      benefits: [
        'Reduce IT downtime by 80%',
        'Lower IT operational costs',
        'Improved system reliability',
        'Expert technical support'
      ],
      link: 'https://ziontechgroup.com/it-support',
      category: 'Support'
    },
    {
      icon: BarChart,
      title: 'Business Intelligence & Analytics',
      description: 'Transform your data into actionable insights with custom BI solutions and data visualization.',
      price: 'Starting at $1,800/month',
      features: [
        'Custom dashboard development',
        'Data warehouse design',
        'ETL process automation',
        'Advanced analytics',
        'Report generation',
        'Data visualization'
      ],
      benefits: [
        'Make data-driven decisions',
        'Improve business performance',
        'Automate reporting processes',
        'Gain competitive insights'
      ],
      link: 'https://ziontechgroup.com/business-intelligence',
      category: 'Analytics'
    },
    {
      icon: Globe,
      title: 'Web Development & E-commerce',
      description: 'Modern, responsive websites and e-commerce platforms that drive business growth.',
      price: 'Starting at $2,500/website',
      features: [
        'Responsive web design',
        'E-commerce development',
        'SEO optimization',
        'Content management systems',
        'Payment gateway integration',
        'Performance optimization'
      ],
      benefits: [
        'Increase online visibility',
        'Improve user experience',
        'Boost conversion rates',
        'Mobile-friendly design'
      ],
      link: 'https://ziontechgroup.com/web-development',
      category: 'Development'
    },
    {
      icon: Zap,
      title: 'IT Automation & Integration',
      description: 'Automate business processes and integrate systems to improve efficiency and reduce manual work.',
      price: 'Starting at $1,000/month',
      features: [
        'Process automation',
        'System integration',
        'Workflow optimization',
        'API development',
        'Data synchronization',
        'Custom scripting'
      ],
      benefits: [
        'Reduce manual work by 70%',
        'Improve process efficiency',
        'Eliminate data silos',
        'Faster business operations'
      ],
      link: 'https://ziontechgroup.com/it-automation',
      category: 'Automation'
    }
  ]

  const categories = [
    'All',
    'Infrastructure',
    'Security',
    'Development',
    'Data Management',
    'Support',
    'Analytics',
    'Automation'
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                1,000+ IT Projects Completed
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                4.8/5 Client Rating
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                24/7 IT Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                  <a
                    href="https://ziontechgroup.com/consultation"
                    className="flex-1 border border-white/30 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300">
              We combine technical expertise with business understanding to deliver IT solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified IT professionals with 10+ years of experience across all major technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support to keep your systems running smoothly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and advanced threat protection.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Average 50% cost reduction and 99.9% uptime for our managed services clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Service Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Process
            </h2>
            <p className="text-xl text-gray-300">
              From assessment to implementation, we follow a proven methodology to deliver exceptional IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assessment & Planning</h3>
              <p className="text-gray-300">We analyze your current IT infrastructure and identify improvement opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution Design</h3>
              <p className="text-gray-300">Create a comprehensive IT strategy tailored to your business requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
              <p className="text-gray-300">Deploy solutions with minimal disruption to your business operations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Support & Optimization</h3>
              <p className="text-gray-300">Ongoing support, monitoring, and optimization to ensure peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can improve your business efficiency and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free IT Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage