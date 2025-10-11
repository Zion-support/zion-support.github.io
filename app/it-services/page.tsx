'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Globe, 
  Smartphone, 
  Database, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Target,
  Heart,
  FileText,
  Cpu,
  Link as LinkIcon,
  Server,
  Zap,
  Eye,
  Mic,
  Package,
  Monitor,
  Wifi,
  Lock,
  BarChart3,
  Code,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions including migration, optimization, and management across all major platforms.',
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud Architecture Design',
        'Multi-cloud Strategies',
        'Cost Optimization',
        'Disaster Recovery',
        '24/7 Monitoring'
      ],
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Expert management'
      ],
      category: 'Cloud & Infrastructure',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats and ensure compliance.',
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessments',
        'Penetration Testing',
        'Security Monitoring',
        'Compliance Management'
      ],
      benefits: [
        'Enhanced security posture',
        'Compliance ready',
        'Risk mitigation',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js Development',
        'Responsive Design',
        'SEO Optimization',
        'Performance Tuning',
        'Progressive Web Apps'
      ],
      benefits: [
        'Modern web presence',
        'Mobile-first design',
        'SEO optimized',
        'Fast loading times'
      ],
      category: 'Development',
      popular: true,
      icon: Globe
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Capabilities'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store optimization',
        'User engagement features'
      ],
      category: 'Development',
      popular: false,
      icon: Smartphone
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management services for optimal performance and reliability.',
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database Design & Optimization',
        'Performance Tuning',
        'Backup & Recovery',
        'Data Migration',
        'Security Hardening'
      ],
      benefits: [
        'Optimized performance',
        'Data security',
        'Reliable backups',
        'Expert management'
      ],
      category: 'Data & Analytics',
      popular: false,
      icon: Database
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with modern DevOps practices and automation.',
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Automated Testing'
      ],
      benefits: [
        'Faster deployments',
        'Reduced errors',
        'Automated processes',
        'Better collaboration'
      ],
      category: 'Cloud & Infrastructure',
      popular: true,
      icon: Settings
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and plan your digital transformation.',
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation Planning',
        'Vendor Evaluation',
        'Risk Assessment'
      ],
      benefits: [
        'Strategic guidance',
        'Technology roadmap',
        'Cost optimization',
        'Risk mitigation'
      ],
      category: 'Consulting',
      popular: false,
      icon: Target
    },
    {
      id: 'custom-software',
      name: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business needs and requirements.',
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      features: [
        'Custom Application Development',
        'API Development',
        'Integration Services',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      benefits: [
        'Customized solutions',
        'Scalable architecture',
        'Seamless integration',
        'Ongoing support'
      ],
      category: 'Development',
      popular: true,
      icon: Code
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and manage robust network infrastructure for optimal performance and security.',
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Network Design & Implementation',
        'Wireless Solutions',
        'Security Configuration',
        'Performance Monitoring',
        'Disaster Recovery'
      ],
      benefits: [
        'Reliable connectivity',
        'Enhanced security',
        'Scalable infrastructure',
        'Expert management'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Wifi
    },
    {
      id: 'it-support',
      name: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services to keep your systems running smoothly and your team productive.',
      price: 'Starting at $99/user/month',
      marketPrice: '$150-300/user/month',
      features: [
        '24/7 Helpdesk Support',
        'Remote Assistance',
        'Hardware Maintenance',
        'Software Installation',
        'User Training'
      ],
      benefits: [
        '24/7 availability',
        'Quick response times',
        'Proactive maintenance',
        'User satisfaction'
      ],
      category: 'Support',
      popular: true,
      icon: Headphones
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud & Infrastructure', name: 'Cloud & Infrastructure', count: services.filter(s => s.category === 'Cloud & Infrastructure').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Data & Analytics', name: 'Data & Analytics', count: services.filter(s => s.category === 'Data & Analytics').length },
    { id: 'Consulting', name: 'Consulting', count: services.filter(s => s.category === 'Consulting').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'Support', name: 'Support', count: services.filter(s => s.category === 'Support').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, DevOps, and custom software solutions. Expert IT consulting and support." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management, IT consulting" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                IT Services That <span className="text-cyan-400">Scale</span> Your Business
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive IT solutions designed to optimize your infrastructure, 
                enhance security, and accelerate your digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        {service.popular && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{service.category}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link 
                        to="/contact"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <Link 
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="bg-slate-800/50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Ready to Transform Your IT Infrastructure?
                  </h2>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Let our IT experts help you choose the right solutions for your business needs. 
                    Get a free consultation and see how we can optimize your technology stack.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Get Free Consultation
                    </Link>
                    <a 
                      href="tel:+13024640950"
                      className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Call: (302) 464-0950
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;