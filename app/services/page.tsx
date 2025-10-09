'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Settings,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Star,
  Cpu,
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions for enterprise transformation',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'AI Marketing',
      description: 'Revolutionary AI-powered marketing automation and optimization',
      icon: TrendingUp,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      href: '/ai-marketing',
      features: ['Ad Optimization', 'Content Generation', 'Customer Segmentation', 'Campaign Automation']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Settings,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/ai-automation',
      features: ['Workflow Automation', 'Exception Handling', 'Process Optimization', 'Smart Routing']
    },
    {
      title: 'AI Healthcare',
      description: 'Cutting-edge AI solutions for medical imaging and drug discovery',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/ai-healthcare',
      features: ['Medical Imaging', 'Drug Discovery', 'Personalized Medicine', 'Clinical Decision Support']
    },
    {
      title: 'AI Fintech',
      description: 'Revolutionary AI-powered financial services and risk management',
      icon: TrendingUp,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      href: '/ai-fintech',
      features: ['Trading Algorithms', 'Fraud Detection', 'Risk Assessment', 'Credit Scoring']
    },
    {
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with AI-powered analytics',
      icon: BarChart,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/ai-data-analytics',
      features: ['Predictive Modeling', 'Real-time Dashboards', 'Data Visualization', 'Statistical Analysis']
    }
  ];

  const itServices = [
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/it-infrastructure',
      features: ['Cloud Migration', 'Server Management', 'Network Security', 'Disaster Recovery']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and response',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      href: '/cybersecurity',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing and deployment',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/devops',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Infrastructure as Code', 'Monitoring & Logging']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      href: '/database',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery']
    }
  ];

  const emergingTech = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing capabilities for complex problem solving',
      icon: Zap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/quantum-computing',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation']
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing systems with intelligent decision-making capabilities',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      href: '/autonomous-systems',
      features: ['Self-Healing Systems', 'Adaptive Learning', 'Autonomous Operations', 'Intelligent Monitoring']
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, smart contracts, and Web3 applications',
      icon: Globe,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      href: '/blockchain-web3',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Decentralized Apps']
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for smart systems',
      icon: Cpu,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/iot-edge-computing',
      features: ['IoT Integration', 'Edge Analytics', 'Real-time Processing', 'Device Management']
    }
  ];

  const microSaas = [
    {
      title: 'Micro SAAS Solutions',
      description: '50+ ready-to-use AI-driven applications for modern businesses',
      icon: Star,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      href: '/micro-saas',
      features: ['Productivity Apps', 'Marketing Tools', 'Analytics Dashboards', 'Business Automation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business operations. 
            From cutting-edge artificial intelligence to robust infrastructure, we provide everything 
            you need to stay ahead in the digital age.
          </p>
        </section>

        {/* AI Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Brain className="w-8 h-8 mr-3 text-cyan-400" />
            AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Cloud className="w-8 h-8 mr-3 text-blue-400" />
            IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Emerging Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Zap className="w-8 h-8 mr-3 text-yellow-400" />
            Emerging Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergingTech.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Star className="w-8 h-8 mr-3 text-orange-400" />
            Micro SAAS Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaas.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our experts help you choose the right solutions for your specific needs. 
            Get a free consultation and discover how we can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Call Now: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;