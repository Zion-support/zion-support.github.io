import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Cpu, Shield, Globe, Sparkles } from 'lucide-react';
import FuturisticDesign from '../components/FuturisticDesign';
import AnimatedBackground from '../components/AnimatedBackground';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      description: 'Affordable, powerful AI-driven tools for modern businesses. Start from $79/month.',
      icon: '💻',
      link: '/micro-saas',
      features: ['12+ Ready-to-use Tools', 'AI-Powered Automation', 'Instant Setup', '24/7 Support'],
      price: 'Starting at $79/month',
      popular: true
    },
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including ML, NLP, and computer vision.',
      icon: '🤖',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud, security, DevOps, and infrastructure.',
      icon: '⚙️',
      link: '/it-services',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'DevOps & CI/CD', 'Database Administration'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing capabilities for complex problem solving.',
      icon: '⚛️',
      link: '/quantum-computing',
      features: ['Quantum Algorithms', 'Quantum Security', 'Optimization', 'Simulation'],
      price: 'Custom Pricing'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing and self-optimizing systems for enterprise operations.',
      icon: '🔄',
      link: '/autonomous-systems',
      features: ['Self-Healing Infrastructure', 'Automated Operations', 'Intelligent Monitoring', 'Adaptive Learning'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics for strategic decision making.',
      icon: '📊',
      link: '/business-intelligence',
      features: ['Real-time Analytics', 'Data Visualization', 'Reporting', 'Dashboard Creation'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and Web3 solutions.',
      icon: '🔗',
      link: '/blockchain',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'Web3 Applications'],cursor/add-new-services-and-deploy-updates-f159
      price: 'Starting at $8,000/project'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices, edge analytics, and industrial IoT solutions.',
      icon: '📱',
      link: '/iot-edge',
      features: ['Device Management', 'Edge Analytics', 'Industrial IoT', 'Smart Cities'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Robotics & Automation',
      description: 'Intelligent robots, RPA, and advanced automation solutions.',
      icon: '🤖',
      link: '/robotics',
      features: ['RPA Solutions', 'Industrial Robots', 'Service Robots', 'AI-Powered Automation'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security services including threat detection and compliance.',
      icon: '🛡️',
      link: '/cybersecurity',
      features: ['Threat Detection', 'Penetration Testing', 'Zero Trust Security', 'SOC Services'],cursor/add-new-services-and-deploy-updates-f159
      price: 'Starting at $2,500/month'
    }
  ];

  const additionalServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud transformation with zero downtime and cost optimization.',
      icon: '☁️',
      features: ['Zero Downtime', 'Cost Optimization', 'Security Enhancement', 'Scalability'],
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection and incident response.',
      icon: '🔒',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management']
    },
    {
      title: 'DevOps & Automation',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      icon: '🔄',
      features: ['CI/CD Pipelines', 'Infrastructure Automation', 'Monitoring & Alerting', 'Testing Automation']
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions.',
      icon: '📈',
      features: ['Data Warehouse Design', 'ETL Development', 'Dashboard Creation', 'Predictive Modeling']
    },
    {
      title: 'API Development',
      description: 'Custom API development and third-party integration services.',
      icon: '🔌',
      features: ['RESTful APIs', 'GraphQL Development', 'Third-party Integrations', 'API Documentation']
    },
    {
      title: 'Consulting',
      description: 'Expert guidance and strategic planning for digital transformation.',
      icon: '💡',
      features: [
        'Strategic Planning',
        'Technology Assessment',
        'Implementation Support',
        'Training',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="particles" intensity="medium" color="cyan" />
      
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FuturisticDesign variant="neon" intensity="high" className="rounded-3xl p-12 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cyan-300 max-w-3xl mx-auto">
                Comprehensive AI, IT, and micro SAAS solutions designed to transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticDesign variant="gradient" intensity="medium" className="rounded-lg">
                  <a href="/contact" className="inline-block px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300">
                    Get Free Consultation
                  </a>
                </FuturisticDesign>
                <FuturisticDesign variant="glass" intensity="medium" className="rounded-lg">
                  <a href="/real-services" className="inline-block px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300">
                    View Real Pricing
                  </a>
                </FuturisticDesign>
              </div>
            </FuturisticDesign>
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our comprehensive range of technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <FuturisticDesign 
                key={index} 
                variant={service.popular ? "neon" : "glass"} 
                intensity="medium" 
                className="rounded-lg p-6 hover:scale-105 transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-5xl mb-4 text-cyan-400">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </FuturisticDesign>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300">
              Specialized solutions for specific business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <FuturisticDesign key={index} variant="glass" intensity="low" className="rounded-lg p-6 hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4 text-cyan-400">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FuturisticDesign>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FuturisticDesign variant="gradient" intensity="high" className="rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </FuturisticDesign>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
