'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {
  Brain,
  Cloud,
  Zap,
  Shield,
  Code,
  BarChart,
  Users,
  Settings,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Target,
  Globe,
  Cpu,
  MessageSquare,
  Eye,
  Sparkles,
  TrendingUp,
  Database,
  Smartphone,
  Lock,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      category: 'ai',
      title: 'AI Services',
      description: 'Comprehensive AI solutions for modern businesses',
      icon: Brain,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making'
      ],
      benefits: [
        'Increase efficiency by 300%',
        'Reduce operational costs by 50%',
        'Improve accuracy by 95%',
        '24/7 automated operations'
      ]
    },
    {
      category: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: Cloud,
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Multi-cloud Management',
        'Disaster Recovery',
        'Security & Compliance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        '50% cost reduction',
        'Instant scalability',
        'Enhanced security'
      ]
    },
    {
      category: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions for digital protection',
      icon: Shield,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Audits',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      benefits: [
        'Zero security breaches',
        'Real-time monitoring',
        'Compliance guaranteed',
        'Expert security team'
      ]
    },
    {
      category: 'development',
      title: 'Custom Development',
      description: 'Tailored software solutions for your business',
      icon: Code,
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Database Design',
        'System Integration',
        'Maintenance & Support'
      ],
      benefits: [
        'Custom solutions',
        'Modern technologies',
        'Scalable architecture',
        'Ongoing support'
      ]
    },
    {
      category: 'analytics',
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      icon: BarChart,
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Predictive Modeling',
        'Real-time Dashboards',
        'Data Warehousing',
        'Reporting Solutions'
      ],
      benefits: [
        'Data-driven decisions',
        'Real-time insights',
        'Improved ROI',
        'Competitive advantage'
      ]
    },
    {
      category: 'consulting',
      title: 'IT Consulting',
      description: 'Strategic technology consulting and planning',
      icon: Users,
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Change Management',
        'Training & Support',
        'Project Management'
      ],
      benefits: [
        'Expert guidance',
        'Strategic planning',
        'Risk mitigation',
        'Proven methodologies'
      ]
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'consulting', name: 'Consulting', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, cloud, cybersecurity, and development services. Transform your business with our expert solutions." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, custom development, data analytics, IT consulting" />
      </Helmet>
      <SEOOptimizer />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform your business. From AI and cloud computing 
            to cybersecurity and custom development, we deliver results that matter.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  Learn More
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your goals. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;