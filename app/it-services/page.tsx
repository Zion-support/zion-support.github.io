'use client';
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Network, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain,
  Zap,
  Smartphone,
  Laptop,
  Globe,
  Settings,
  BarChart,
  Target,
  Award,
  Lock,
  RefreshCw,
  Download,
  Upload,
  Users,
  Headphones,
  Wrench,
  Code
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      name: 'Cloud Migration & Setup',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance',
      icon: Cloud,
      features: [
        'AWS/Azure/GCP Migration',
        'Zero Downtime Migration',
        'Performance Optimization',
        'Cost Optimization',
        'Security Configuration',
        'Backup & Recovery',
        '24/7 Monitoring'
      ],
      category: 'Cloud Services',
      popular: true,
      rating: 4.9,
      users: '1,200+',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        '99.9% uptime guarantee',
        '50% cost reduction',
        'Zero data loss',
        '24/7 support'
      ],
      price: 'Starting at $2,999/project'
    },
    {
      id: 2,
      name: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from cyber threats',
      icon: Shield,
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Security Auditing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Penetration Testing'
      ],
      category: 'Security',
      popular: true,
      rating: 4.8,
      users: '800+',
      color: 'from-red-500 to-orange-600',
      capabilities: [
        '99.9% threat detection',
        'SOC 2 compliance',
        'Real-time monitoring',
        'Expert security team'
      ],
      price: 'Starting at $1,999/mo'
    },
    {
      id: 3,
      name: 'IT Infrastructure Design',
      description: 'Scalable and secure infrastructure architecture for growing businesses',
      icon: Server,
      features: [
        'Network Architecture',
        'Server Configuration',
        'Load Balancing',
        'Disaster Recovery',
        'Scalability Planning',
        'Performance Tuning',
        'Documentation'
      ],
      category: 'Infrastructure',
      popular: true,
      rating: 4.7,
      users: '600+',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        '99.99% uptime',
        'Unlimited scalability',
        'Disaster recovery',
        'Performance optimization'
      ],
      price: 'Starting at $4,999/project'
    },
    {
      id: 4,
      name: '24/7 IT Support & Monitoring',
      description: 'Round-the-clock technical support and proactive system monitoring',
      icon: Headphones,
      features: [
        '24/7 Help Desk',
        'Remote Support',
        'Proactive Monitoring',
        'Issue Resolution',
        'Performance Optimization',
        'Security Updates',
        'Backup Management'
      ],
      category: 'Support',
      popular: true,
      rating: 4.8,
      users: '2,500+',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '15-minute response time',
        '99.9% issue resolution',
        'Proactive monitoring',
        'Expert support team'
      ],
      price: 'Starting at $299/mo'
    },
    {
      id: 5,
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements',
      icon: Code,
      features: [
        'Custom Applications',
        'API Development',
        'Database Design',
        'Integration Services',
        'Mobile App Development',
        'Web Development',
        'Quality Assurance'
      ],
      category: 'Development',
      popular: true,
      rating: 4.9,
      users: '1,800+',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        'Custom solutions',
        'Agile development',
        'Quality assurance',
        'Ongoing support'
      ],
      price: 'Starting at $150/hour'
    },
    {
      id: 6,
      name: 'DevOps & CI/CD Implementation',
      description: 'Streamlined development processes with automated deployment and monitoring',
      icon: RefreshCw,
      features: [
        'CI/CD Pipeline Setup',
        'Automated Testing',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security Integration',
        'Performance Optimization'
      ],
      category: 'DevOps',
      popular: true,
      rating: 4.7,
      users: '900+',
      color: 'from-teal-500 to-cyan-600',
      capabilities: [
        '90% faster deployments',
        'Automated testing',
        'Zero-downtime updates',
        'Continuous monitoring'
      ],
      price: 'Starting at $3,999/project'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Support', 'Development', 'DevOps'];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechStart Inc.',
      content: 'Zion Tech Group\'s cloud migration service was exceptional. They migrated our entire infrastructure with zero downtime and reduced our costs by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'IT Director, Global Corp',
      content: 'Their cybersecurity suite has given us complete peace of mind. The 24/7 monitoring and rapid response team are outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO, E-commerce Solutions',
      content: 'The custom software development team delivered exactly what we needed. The application has transformed our business operations.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Cloud className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure, enhance security, and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete IT Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From cloud migration to cybersecurity, we provide end-to-end IT services to keep your business running smoothly and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  {service.users} clients
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {service.price}
                </div>
                {service.capabilities && (
                  <div className="space-y-1">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300">
              Contact our expert team for a free consultation and customized solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
              <p className="text-gray-300 mb-4">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Response within 2 hours</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mx-auto mb-4">
                <Laptop className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Address</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            See what our clients are saying about our IT services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and discover how our IT services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border border-white/30 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            Free consultation • No obligation • Expert advice
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;