import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, 
  Cloud, Code, Smartphone, Database, Wrench, BarChart3, Eye, 
  TrendingUp, MessageCircle, Mail, Phone, MapPin, Clock, Globe,
  Target, Lightbulb, Cpu, Rocket, Atom, Satellite, CircuitBoard
} from 'lucide-react'

export default function ServicesPage() {
  const mainServices = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with intelligent automation and machine learning',
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      link: '/ai-services',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Process Automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions for modern businesses',
      icon: <Cpu className="w-12 h-12 text-blue-400" />,
      link: '/it-services',
      features: [
        'Cloud Migration',
        'Web Development',
        'Mobile App Development',
        'DevOps & CI/CD',
        'Database Management',
        'System Integration'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security solutions',
      icon: <Shield className="w-12 h-12 text-red-400" />,
      link: '/cybersecurity',
      features: [
        'Threat Detection & Response',
        'Security Audits',
        'Compliance Management',
        'Penetration Testing',
        'Security Training',
        'Incident Response'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business',
      icon: <Cloud className="w-12 h-12 text-cyan-400" />,
      link: '/cloud-services',
      features: [
        'AWS/Azure/GCP Expertise',
        'Migration Services',
        'Cost Optimization',
        '24/7 Monitoring',
        'Disaster Recovery',
        'Auto-scaling Solutions'
      ],
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const additionalServices = [
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes and workflows',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      link: '/digital-transformation'
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights',
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      link: '/data-analytics'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure and transparent blockchain implementations',
      icon: <CircuitBoard className="w-8 h-8 text-purple-400" />,
      link: '/blockchain'
    },
    {
      title: 'IoT Solutions',
      description: 'Connect and manage your devices and sensors',
      icon: <Satellite className="w-8 h-8 text-indigo-400" />,
      link: '/iot-solutions'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation computing solutions',
      icon: <Atom className="w-8 h-8 text-pink-400" />,
      link: '/quantum-computing'
    },
    {
      title: 'AR/VR Solutions',
      description: 'Immersive experiences for your business',
      icon: <Eye className="w-8 h-8 text-teal-400" />,
      link: '/ar-vr-solutions'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems and identify opportunities for improvement',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy tailored to your business goals',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption',
      icon: <Wrench className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing support and continuous optimization for maximum performance',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group | AI, IT, Cybersecurity & Cloud Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, cybersecurity, cloud infrastructure, and digital transformation. Expert solutions for modern businesses." />
        <meta name="keywords" content="AI services, IT services, cybersecurity, cloud solutions, digital transformation, web development, mobile apps, data analytics, blockchain" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that have helped hundreds of businesses transform and grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Additional Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for emerging technologies and unique business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
