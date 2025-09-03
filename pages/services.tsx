import React from 'react';
import Layout from '../components/Layout';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Database,
  Lock,
  ArrowRight,
  MessageCircle,
  Phone,
  Building,
  Target,
  BarChart3,
  Settings,
  Cpu,
  Layers,
  Network,
  Rocket
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations and decision-making processes.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making'
      ],
      href: '/services/ai'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable, secure, and efficient cloud solutions designed for modern enterprise needs.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Computing',
        'Multi-Cloud Strategy'
      ],
      href: '/services/cloud'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Risk Assessment',
        'Incident Response',
        'Security Training'
      ],
      href: '/services/cybersecurity'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
      features: [
        'Process Automation',
        'Legacy System Modernization',
        'Change Management',
        'Technology Strategy',
        'Digital Workflows',
        'Innovation Consulting'
      ],
      href: '/services/transformation'
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: 'Infrastructure',
      description: 'Robust and scalable infrastructure solutions for your business needs.'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance to help you make the right technology decisions.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific requirements.'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision making.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Rocket },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Phone }
  ];

  return (
    <Layout
      title="Services - Zion Tech Group"
      description="Comprehensive technology services including AI, cloud computing, cybersecurity, and digital transformation solutions for modern businesses."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From AI and cloud computing to cybersecurity and digital transformation, we provide end-to-end technology solutions that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Settings className="mr-2 h-5 w-5" />
              Explore Services
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized services to complement your technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let's discuss how our technology services can help you achieve your goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Started Today
            </a>
            <a
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}