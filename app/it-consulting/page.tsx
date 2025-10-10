'use client';
import React, { useState, lazy, Suspense } from 'react';
import { Check, ArrowRight, Search, Filter, Phone, Mail, Clock, Users, Shield, Zap, Database, Cloud, Code, Settings } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const ITConsultingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      name: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development and technology roadmap planning',
      category: 'Strategy',
      icon: Settings,
      features: [
        'Technology assessment and audit',
        'Digital transformation roadmap',
        'IT governance framework',
        'Cost optimization strategies',
        'Risk assessment and mitigation'
      ],
      duration: '2-4 weeks',
      price: 'Starting at $5,000'
    },
    {
      id: 2,
      name: 'Cloud Architecture Design',
      description: 'Design and implement scalable cloud solutions for your business needs',
      category: 'Cloud',
      icon: Cloud,
      features: [
        'Multi-cloud strategy development',
        'Infrastructure as Code (IaC)',
        'Security and compliance design',
        'Cost optimization planning',
        'Migration strategy and execution'
      ],
      duration: '4-8 weeks',
      price: 'Starting at $8,000'
    },
    {
      id: 3,
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and hardening recommendations',
      category: 'Security',
      icon: Shield,
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Security policy development',
        'Incident response planning',
        'Compliance audit and remediation'
      ],
      duration: '3-6 weeks',
      price: 'Starting at $6,000'
    },
    {
      id: 4,
      name: 'Database Optimization',
      description: 'Performance tuning and optimization of database systems',
      category: 'Database',
      icon: Database,
      features: [
        'Performance analysis and tuning',
        'Query optimization',
        'Index strategy development',
        'Backup and recovery planning',
        'Scalability recommendations'
      ],
      duration: '2-4 weeks',
      price: 'Starting at $4,000'
    },
    {
      id: 5,
      name: 'DevOps Implementation',
      description: 'Establish DevOps practices and CI/CD pipelines for your organization',
      category: 'DevOps',
      icon: Code,
      features: [
        'CI/CD pipeline setup',
        'Infrastructure automation',
        'Monitoring and logging setup',
        'Deployment strategy development',
        'Team training and best practices'
      ],
      duration: '6-12 weeks',
      price: 'Starting at $10,000'
    },
    {
      id: 6,
      name: 'System Integration',
      description: 'Seamless integration of disparate systems and applications',
      category: 'Integration',
      icon: Zap,
      features: [
        'API development and integration',
        'Data migration and synchronization',
        'Legacy system modernization',
        'Third-party service integration',
        'Real-time data processing'
      ],
      duration: '4-10 weeks',
      price: 'Starting at $7,000'
    }
  ];

  const categories = ['all', 'Strategy', 'Cloud', 'Security', 'Database', 'DevOps', 'Integration'];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: Check },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <Navigation />
      </Suspense>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Consulting</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your technology infrastructure with expert IT consulting services. We help businesses optimize their systems, enhance security, and drive digital transformation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search consulting services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="text-cyan-400 font-semibold text-sm">
                      {service.price}
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Consulting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
                <p className="text-gray-300 text-sm">
                  We analyze your current systems, identify pain points, and understand your business objectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
                <p className="text-gray-300 text-sm">
                  We develop a comprehensive strategy and roadmap tailored to your specific needs and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                <p className="text-gray-300 text-sm">
                  We execute the plan with precision, ensuring minimal disruption to your business operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
                <p className="text-gray-300 text-sm">
                  We monitor performance, provide ongoing support, and continuously optimize your systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT consulting services can help optimize your technology stack and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-32 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ITConsultingPage;