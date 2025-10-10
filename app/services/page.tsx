'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Search, 
  Filter,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Brain,
  Cloud,
  Code,
  BarChart,
  Users,
  Settings,
  Smartphone,
  Database,
  Globe,
  Lock,
  Target,
  Sparkles
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: any;
  category: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  popular: boolean;
}

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services: Service[] = [
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      icon: Brain,
      category: 'AI Services',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Integration with CRM systems',
        'Real-time learning capabilities'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      popular: true
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      icon: Cloud,
      category: 'IT Services',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions'
      ],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      popular: true
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting.',
      icon: BarChart,
      category: 'AI Services',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Multi-source integration'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      popular: false
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      icon: Shield,
      category: 'IT Services',
      features: [
        'Threat detection and response',
        'Vulnerability assessments',
        'Compliance management',
        'Security monitoring',
        'Incident response'
      ],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduce security incidents by 95%', 'Compliance assurance', 'Expert security team'],
      popular: true
    },
    {
      id: 5,
      title: 'Micro SAAS Solutions',
      description: 'Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.',
      icon: Settings,
      category: 'Micro SAAS',
      features: [
        'AI-powered CRM',
        'Analytics dashboard',
        'Content generation',
        'Chatbot builder',
        'Workflow automation'
      ],
      price: 'Starting at $49/month',
      marketPrice: '$99-500/month',
      benefits: ['Quick setup', 'Affordable pricing', 'Powerful features', 'Easy integration'],
      popular: false
    },
    {
      id: 6,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and responsive design.',
      icon: Code,
      category: 'IT Services',
      features: [
        'Custom web applications',
        'Responsive design',
        'E-commerce solutions',
        'API development',
        'Performance optimization'
      ],
      price: 'Starting at $5,000/project',
      marketPrice: '$8000-50000/project',
      benefits: ['Modern technology stack', 'Mobile-responsive design', 'SEO optimization', 'Security best practices'],
      popular: false
    }
  ];

  const categories = ['all', 'AI Services', 'IT Services', 'Micro SAAS'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, cloud solutions, analytics, cybersecurity, and micro SAAS applications." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
                <div className="relative md:w-64">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none">
                    <option value="all" className="bg-slate-800">All Categories</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                {selectedCategory === 'all' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found. Choose the perfect solution for your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                    service.popular
                      ? 'border-2 border-cyan-400 shadow-2xl shadow-cyan-500/25'
                      : 'border border-white/20'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-lg text-gray-400 line-through ml-2">{service.marketPrice}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm">
                      <div className="text-gray-400 mb-2">Key Benefits:</div>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="text-cyan-400 text-sm">• {benefit}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 text-center"
                    >
                      <Zap className="w-5 h-5 mr-2 inline" />
                      Get Started
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center text-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;