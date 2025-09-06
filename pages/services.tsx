import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Code, 
  Database, 
  Globe, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Building2,
  TrendingUp,
  Cpu,
  Lock,
  BarChart3
} from 'lucide-react';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

const contact: ContactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  site: 'https://ziontechgroup.com',
};

const serviceCategories = [
  {
    title: 'AI Solutions',
    description: '80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics',
    icon: Brain,
    color: 'blue',
    services: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Quantum AI',
      'AI Automation'
    ]
  },
  {
    title: 'Cloud Services',
    description: 'Comprehensive cloud infrastructure and platform services for scalable, secure, and cost-effective solutions',
    icon: Cloud,
    color: 'purple',
    services: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling',
      'Multi-cloud Strategy',
      'Container Orchestration',
      'Serverless Architecture'
    ]
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets and ensure compliance with industry standards',
    icon: Shield,
    color: 'green',
    services: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Management',
      'Incident Response',
      'Zero Trust Architecture',
      'Security Monitoring'
    ]
  },
  {
    title: 'Blockchain & Web3',
    description: 'Next-generation blockchain solutions and Web3 technologies for decentralized applications',
    icon: Globe,
    color: 'indigo',
    services: [
      'Smart Contracts',
      'DeFi Platforms',
      'NFT Marketplaces',
      'Supply Chain Tracking',
      'Digital Identity',
      'Token Economics'
    ]
  },
  {
    title: 'Micro SaaS Development',
    description: 'Custom micro SaaS applications designed to solve specific business problems efficiently',
    icon: Code,
    color: 'yellow',
    services: [
      'Custom Web Applications',
      'API Development',
      'Database Design',
      'User Authentication',
      'Payment Integration',
      'Analytics Dashboard'
    ]
  },
  {
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure solutions including networking, servers, and system administration',
    icon: Database,
    color: 'red',
    services: [
      'Network Design',
      'Server Management',
      'System Administration',
      'Backup Solutions',
      'Disaster Recovery',
      'Performance Optimization'
    ]
  }
];

const stats = [
  { icon: Users, value: '150+', label: 'Micro SaaS Products' },
  { icon: Brain, value: '100+', label: 'AI Services' },
  { icon: Building2, value: '100+', label: 'IT Solutions' },
  { icon: Award, value: '50+', label: 'Happy Clients' }
];

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and Micro SaaS services to transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud computing, cybersecurity, blockchain, web development" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 animate-pulse" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <h1 
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our Services
            </h1>
            <p 
              className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-slate-300 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Comprehensive technology solutions designed to drive your business forward with innovation and efficiency
            </p>
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Service Categories</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet every business need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="group p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  <category.icon className={`w-12 h-12 mb-6 ${
                    category.color === 'blue' ? 'text-blue-400' :
                    category.color === 'purple' ? 'text-purple-400' :
                    category.color === 'green' ? 'text-green-400' :
                    category.color === 'indigo' ? 'text-indigo-400' :
                    category.color === 'yellow' ? 'text-yellow-400' :
                    'text-red-400'
                  }`} />
                  <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                  <p className="text-slate-300 mb-6">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-slate-400">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center font-semibold group-hover:translate-x-1 transition-transform ${
                      category.color === 'blue' ? 'text-blue-400 hover:text-blue-300' :
                      category.color === 'purple' ? 'text-purple-400 hover:text-purple-300' :
                      category.color === 'green' ? 'text-green-400 hover:text-green-300' :
                      category.color === 'indigo' ? 'text-indigo-400 hover:text-indigo-300' :
                      category.color === 'yellow' ? 'text-yellow-400 hover:text-yellow-300' :
                      'text-red-400 hover:text-red-300'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href={`tel:${contact.phone}`} 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Call {contact.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}