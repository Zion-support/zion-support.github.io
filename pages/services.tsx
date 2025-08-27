import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Zap, 
  Database, 
  Smartphone, 
  Code, 
  Lock, 
  TrendingUp,
  Rocket,
  Cpu,
  Network,
  Palette,
  BarChart3
} from 'lucide-react';

const Services: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Rocket, color: 'from-purple-600 to-pink-600' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, color: 'from-blue-600 to-cyan-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-green-600 to-teal-600' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-600' },
    { id: 'web', name: 'Web Development', icon: Globe, color: 'from-indigo-600 to-purple-600' },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone, color: 'from-yellow-600 to-orange-600' },
    { id: 'data', name: 'Data Analytics', icon: BarChart3, color: 'from-emerald-600 to-green-600' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Network, color: 'from-violet-600 to-purple-600' }
  ];

  const services = [
    {
      id: 'ai-development',
      name: 'AI Development & Custom Models',
      category: 'ai',
      description: 'Custom AI models and machine learning solutions tailored to your business needs',
      price: '$5,000 - $50,000',
      features: ['Custom ML Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Chatbots'],
      benefits: ['Automated Decision Making', 'Improved Customer Experience', 'Cost Reduction', 'Competitive Advantage'],
      icon: Brain,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration & Architecture',
      category: 'cloud',
      description: 'Seamless cloud migration and scalable architecture design',
      price: '$10,000 - $100,000',
      features: ['AWS/Azure/GCP Migration', 'Microservices Architecture', 'Container Orchestration', 'Serverless Solutions', 'Cloud Security'],
      benefits: ['Scalability', 'Cost Optimization', 'High Availability', 'Disaster Recovery'],
      icon: Cloud,
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Penetration Testing',
      category: 'security',
      description: 'Comprehensive security solutions and vulnerability assessments',
      price: '$3,000 - $25,000',
      features: ['Penetration Testing', 'Security Audits', 'Incident Response', 'Compliance Management', 'Security Training'],
      benefits: ['Risk Mitigation', 'Regulatory Compliance', 'Customer Trust', 'Business Continuity'],
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 'web-development',
      name: 'Web Application Development',
      category: 'web',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      price: '$8,000 - $80,000',
      features: ['React/Next.js Development', 'Progressive Web Apps', 'E-commerce Solutions', 'API Development', 'Performance Optimization'],
      benefits: ['Enhanced User Experience', 'Mobile Responsiveness', 'SEO Optimization', 'Scalable Architecture'],
      icon: Globe,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      category: 'mobile',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$15,000 - $150,000',
      features: ['iOS/Android Development', 'React Native', 'Flutter Apps', 'App Store Optimization', 'Push Notifications'],
      benefits: ['Mobile-First Experience', 'Cross-Platform Compatibility', 'App Store Presence', 'User Engagement'],
      icon: Smartphone,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & Business Intelligence',
      category: 'data',
      description: 'Transform your data into actionable insights and business intelligence',
      price: '$5,000 - $40,000',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'ETL Processes', 'Data Warehousing'],
      benefits: ['Data-Driven Decisions', 'Performance Insights', 'Operational Efficiency', 'Competitive Intelligence'],
      icon: BarChart3,
      color: 'from-emerald-600 to-green-600'
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3 Solutions',
      category: 'blockchain',
      description: 'Next-generation blockchain applications and decentralized solutions',
      price: '$20,000 - $200,000',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Marketplaces', 'DApp Development', 'Blockchain Integration'],
      benefits: ['Decentralization', 'Transparency', 'Innovation', 'Future-Proof Technology'],
      icon: Network,
      color: 'from-violet-600 to-purple-600'
    },
    {
      id: 'devops',
      name: 'DevOps & CI/CD Automation',
      category: 'cloud',
      description: 'Streamline development workflows with automated DevOps practices',
      price: '$8,000 - $60,000',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      benefits: ['Faster Delivery', 'Reduced Errors', 'Improved Collaboration', 'Cost Efficiency'],
      icon: Zap,
      color: 'from-green-600 to-teal-600'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Services - Zion Tech Group | AI, Cloud, Cybersecurity Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI development, cloud migration, cybersecurity, web development, and more. Get expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI services, cloud migration, cybersecurity, web development, mobile apps, data analytics, blockchain, DevOps, Zion Tech Group" />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Cutting-edge technology solutions designed to transform your business. 
            From AI development to cybersecurity, we deliver innovative solutions that drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              ✉️ Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-blue-400 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Learn More
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Quote for %20${service.name}"
                    className="flex-1 bg-transparent border border-white/30 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let's discuss how our technology solutions can help you achieve your goals. 
              We offer free consultations and custom solution design.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Expert Consultation</h3>
                <p className="text-gray-300 text-sm">Free initial consultation to understand your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-300 text-sm">Tailored solutions designed for your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-300 text-sm">24/7 support and maintenance services</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                ✉️ Schedule Consultation
              </a>
            </div>

            <div className="mt-8 text-center text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
