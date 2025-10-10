'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  Cloud, 
  Shield, 
  Globe, 
  Smartphone, 
  CheckCircle, 
  ArrowRight, 
  Server,
  Database,
  Settings,
  Code,
  Zap
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs',
      price: '$999/month',
      marketPrice: '$2000-5000/month',
      features: [
        'AWS/Azure/GCP deployment',
        'Auto-scaling capabilities',
        'Load balancing',
        'Disaster recovery',
        '24/7 monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improved scalability',
        'Enhanced security',
        'Better performance'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and data',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Threat detection and prevention',
        'Security audits and assessments',
        'Compliance management',
        'Incident response',
        'Security training'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure compliance',
        'Reduce security risks',
        'Peace of mind'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: '$2,999/project',
      marketPrice: '$5000-15000/project',
      features: [
        'Responsive design',
        'SEO optimization',
        'Performance optimization',
        'Cross-browser compatibility',
        'Content management'
      ],
      benefits: [
        'Professional web presence',
        'Better user experience',
        'Improved SEO rankings',
        'Mobile-friendly design'
      ],
      category: 'Development',
      popular: true,
      icon: Globe
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$4,999/project',
      marketPrice: '$8000-25000/project',
      features: [
        'iOS and Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality'
      ],
      benefits: [
        'Reach mobile users',
        'Enhanced user engagement',
        'App store presence',
        'Cross-platform compatibility'
      ],
      category: 'Development',
      popular: false,
      icon: Smartphone
    },
    {
      id: 'devops',
      name: 'DevOps Services',
      description: 'Streamline your development and deployment processes with DevOps automation',
      price: '$1,499/month',
      marketPrice: '$3000-8000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Automated testing',
        'Monitoring and logging',
        'Container orchestration'
      ],
      benefits: [
        'Faster deployments',
        'Reduced errors',
        'Improved collaboration',
        'Better reliability'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimize and maintain your databases for peak performance and security',
      price: '$799/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Database optimization',
        'Backup and recovery',
        'Performance tuning',
        'Security hardening',
        'Migration services'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Reduced downtime',
        'Better scalability'
      ],
      category: 'Database',
      popular: false,
      icon: Database
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud', name: 'Cloud', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'DevOps', name: 'DevOps', count: services.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: services.filter(s => s.category === 'Database').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions to modernize your infrastructure and drive business growth" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure and drive business growth
            </p>
          </div>

          <div className="mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    {service.popular && (
                      <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded-full">Popular</span>
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
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Link href="/contact" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our IT experts help you choose the right solutions for your business needs. 
                Get a free consultation and see how our IT services can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;
