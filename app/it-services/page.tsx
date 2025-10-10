'use client';
import React, { useState } from 'react';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  DollarSign,
  Phone,
  Mail,
  BarChart,
  Server,
  Code,
  Lock,
  Monitor,
  Cpu
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: 12 },
    { id: 'cloud', name: 'Cloud Services', count: 4 },
    { id: 'security', name: 'Cybersecurity', count: 3 },
    { id: 'infrastructure', name: 'Infrastructure', count: 3 },
    { id: 'development', name: 'Development', count: 2 }
  ];

  const services = [
    {
      id: 'cloud-migration',
      category: 'cloud',
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      features: [
        'AWS, Azure, and GCP migration',
        'Zero-downtime migration strategies',
        'Cost optimization analysis',
        'Security and compliance',
        '24/7 monitoring and support'
      ],
      pricing: 'Starting at $5,000',
      duration: '2-8 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced security',
        'Better performance'
      ]
    },
    {
      id: 'cybersecurity',
      category: 'security',
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      features: [
        'Threat detection and prevention',
        'Security audits and assessments',
        'Compliance management',
        'Incident response planning',
        'Employee security training'
      ],
      pricing: 'Starting at $3,000/month',
      duration: 'Ongoing',
      benefits: [
        'Protection against cyber attacks',
        'Compliance with regulations',
        'Reduced security risks',
        'Peace of mind'
      ]
    },
    {
      id: 'infrastructure-management',
      category: 'infrastructure',
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete management of your IT infrastructure with proactive monitoring and maintenance.',
      features: [
        '24/7 infrastructure monitoring',
        'Proactive maintenance',
        'Performance optimization',
        'Backup and disaster recovery',
        'Hardware and software management'
      ],
      pricing: 'Starting at $2,000/month',
      duration: 'Ongoing',
      benefits: [
        'Reduced downtime',
        'Improved performance',
        'Cost savings',
        'Expert support'
      ]
    },
    {
      id: 'api-management',
      category: 'development',
      icon: Settings,
      title: 'API Management',
      description: 'Complete API development, management, and optimization for your business applications.',
      features: [
        'API design and development',
        'API gateway configuration',
        'Rate limiting and security',
        'Documentation and testing',
        'Analytics and monitoring'
      ],
      pricing: 'Starting at $1,500/month',
      duration: '2-4 weeks',
      benefits: [
        'Improved API performance',
        'Better security',
        'Enhanced developer experience',
        'Reduced maintenance costs'
      ]
    },
    {
      id: 'database-optimization',
      category: 'infrastructure',
      icon: Database,
      title: 'Database Optimization',
      description: 'Optimize your database performance and ensure data integrity and security.',
      features: [
        'Performance tuning',
        'Query optimization',
        'Data backup and recovery',
        'Security hardening',
        'Scalability planning'
      ],
      pricing: 'Starting at $2,500',
      duration: '1-3 weeks',
      benefits: [
        'Faster query performance',
        'Improved data security',
        'Reduced storage costs',
        'Better reliability'
      ]
    },
    {
      id: 'mobile-development',
      category: 'development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'Native iOS and Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store deployment',
        'Ongoing maintenance and updates'
      ],
      pricing: 'Starting at $15,000',
      duration: '8-16 weeks',
      benefits: [
        'Increased customer engagement',
        'Better user experience',
        'Mobile-first approach',
        'Competitive advantage'
      ]
    }
  ];

  const filteredServices = selectedService === 'all' 
    ? services 
    : services.filter(service => service.category === selectedService);

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CTO',
      company: 'TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their cloud migration service reduced our costs by 40% and improved performance significantly.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'FinanceFlow',
      content: 'Their cybersecurity solutions gave us peace of mind. We haven\'t had a single security incident since implementing their recommendations.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'VP Engineering',
      company: 'DataFlow',
      content: 'The API management service streamlined our development process. Our API response times improved by 60% and developer productivity increased significantly.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, 
            and drive business growth. From cloud migration to cybersecurity, we've got you covered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedService(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedService === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                <div className="text-gray-400 text-sm mb-6">Duration: {service.duration}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/it-services/${service.id}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our IT services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our IT services can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;