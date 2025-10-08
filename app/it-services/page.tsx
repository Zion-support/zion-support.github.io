import React, { useState } from 'react';
import FuturisticHeader from '../components/FuturisticHeader';
import FuturisticFooter from '../components/FuturisticFooter';

interface ITService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  icon: string;
  category: 'Cloud' | 'Security' | 'Infrastructure' | 'DevOps' | 'Support';
  popular?: boolean;
}

const itServices: ITService[] = [
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Services',
    description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime.',
    features: [
      'Multi-cloud migration strategy',
      'Zero-downtime migration',
      'Data security and compliance',
      'Cost optimization',
      'Performance monitoring',
      '24/7 migration support'
    ],
    pricing: {
      monthly: 499,
      yearly: 4990,
      setup: 1999
    },
    icon: '☁️',
    category: 'Cloud',
    popular: true
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your digital assets from evolving threats.',
    features: [
      'Security assessment and audit',
      'Penetration testing',
      'Vulnerability management',
      'Incident response',
      'Security training',
      'Compliance monitoring'
    ],
    pricing: {
      monthly: 399,
      yearly: 3990,
      setup: 1299
    },
    icon: '🔒',
    category: 'Security'
  },
  {
    id: 'infrastructure-management',
    name: 'Infrastructure Management',
    description: 'Complete management of your IT infrastructure with proactive monitoring and maintenance.',
    features: [
      'Server and network management',
      'Proactive monitoring',
      'Automated backups',
      'Performance optimization',
      'Disaster recovery',
      'Hardware lifecycle management'
    ],
    pricing: {
      monthly: 299,
      yearly: 2990,
      setup: 999
    },
    icon: '🖥️',
    category: 'Infrastructure'
  },
  {
    id: 'devops-ci-cd',
    name: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with automated CI/CD pipelines and DevOps practices.',
    features: [
      'CI/CD pipeline setup',
      'Container orchestration',
      'Infrastructure as Code',
      'Automated testing',
      'Deployment automation',
      'Monitoring and alerting'
    ],
    pricing: {
      monthly: 349,
      yearly: 3490,
      setup: 1199
    },
    icon: '🔄',
    category: 'DevOps',
    popular: true
  },
  {
    id: 'network-security',
    name: 'Network Security',
    description: 'Advanced network security solutions to protect your organization from cyber threats.',
    features: [
      'Firewall configuration',
      'Intrusion detection',
      'VPN setup and management',
      'Network segmentation',
      'Traffic monitoring',
      'Security policy enforcement'
    ],
    pricing: {
      monthly: 249,
      yearly: 2490,
      setup: 799
    },
    icon: '🌐',
    category: 'Security'
  },
  {
    id: 'data-backup-recovery',
    name: 'Data Backup & Recovery',
    description: 'Reliable data backup and disaster recovery solutions to ensure business continuity.',
    features: [
      'Automated daily backups',
      'Cloud and on-premise storage',
      'Point-in-time recovery',
      'Disaster recovery planning',
      'Data encryption',
      'Recovery testing'
    ],
    pricing: {
      monthly: 199,
      yearly: 1990,
      setup: 599
    },
    icon: '💾',
    category: 'Infrastructure'
  },
  {
    id: 'help-desk-support',
    name: '24/7 Help Desk Support',
    description: 'Round-the-clock technical support for all your IT needs and issues.',
    features: [
      '24/7 phone and email support',
      'Remote desktop assistance',
      'Priority ticket handling',
      'Knowledge base access',
      'User training',
      'SLA guarantees'
    ],
    pricing: {
      monthly: 149,
      yearly: 1490,
      setup: 399
    },
    icon: '🎧',
    category: 'Support'
  },
  {
    id: 'cloud-optimization',
    name: 'Cloud Cost Optimization',
    description: 'Optimize your cloud spending and improve performance with our cost management services.',
    features: [
      'Cost analysis and reporting',
      'Resource optimization',
      'Reserved instance planning',
      'Auto-scaling configuration',
      'Waste identification',
      'Budget management'
    ],
    pricing: {
      monthly: 179,
      yearly: 1790,
      setup: 499
    },
    icon: '💰',
    category: 'Cloud'
  }
];

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Cloud', 'Security', 'Infrastructure', 'DevOps', 'Support'];

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactClick = (service: ITService) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'it_service_inquiry', {
        event_category: 'engagement',
        event_label: service.name,
        value: service.pricing.monthly
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      <FuturisticHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 holographic">
            IT Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely in the digital age.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-6 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-600 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-cyan-500/20 border border-cyan-500/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`futuristic-card p-8 ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-cyan-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="border-t border-cyan-500/30 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-white">
                      ${service.pricing.monthly}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="line-through">${service.pricing.monthly * 12}</span>
                    <span className="ml-2 text-green-400 font-medium">
                      ${service.pricing.yearly}/year (Save ${service.pricing.monthly * 12 - service.pricing.yearly})
                    </span>
                  </div>
                  {service.pricing.setup && (
                    <div className="text-sm text-gray-500 mt-1">
                      Setup fee: ${service.pricing.setup}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleContactClick(service)}
                    className="cyber-button px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300"
                  >
                    Get Started
                  </button>
                  <a
                    href={`tel:+13024640950`}
                    className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg text-center font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 holographic">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT solutions with a focus on security, reliability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security measures to protect your critical data</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Response</h3>
              <p className="text-gray-300">24/7 monitoring and immediate response to IT issues</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300">IT infrastructure that grows with your business</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
              <p className="text-gray-300">Certified professionals with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 holographic">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our IT experts to discuss your infrastructure needs and get a customized solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: (302) 464-0950
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-cyan-400">
            <p>✓ Free IT assessment and consultation</p>
            <p>✓ Custom infrastructure design</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ 24/7 technical support</p>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default ITServicesPage;