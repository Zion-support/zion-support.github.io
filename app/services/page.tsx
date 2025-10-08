import React, { useState } from 'react';
import FuturisticHeader from '../components/FuturisticHeader';
import FuturisticFooter from '../components/FuturisticFooter';

interface Service {
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
  category: 'AI' | 'IT' | 'Micro SAAS' | 'Cloud' | 'Security' | 'Development';
  popular?: boolean;
  link: string;
}

const allServices: Service[] = [
  // AI Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation tool that generates high-quality articles, blog posts, and marketing copy.',
    features: ['GPT-4 powered generation', 'SEO optimization', 'Multi-language support', 'Brand voice customization'],
    pricing: { monthly: 49, yearly: 490, setup: 0 },
    icon: '🤖',
    category: 'AI',
    popular: true,
    link: '/ai-services'
  },
  {
    id: 'ml-models',
    name: 'Custom Machine Learning Models',
    description: 'Build and deploy custom ML models tailored to your specific business needs and data.',
    features: ['Custom model development', 'Real-time inference API', 'Model monitoring', 'A/B testing framework'],
    pricing: { monthly: 299, yearly: 2990, setup: 999 },
    icon: '🧠',
    category: 'AI',
    link: '/ai-services'
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Platform',
    description: 'Forecast future trends and behaviors using advanced predictive modeling techniques.',
    features: ['Time series forecasting', 'Customer behavior prediction', 'Risk assessment', 'Real-time predictions'],
    pricing: { monthly: 399, yearly: 3990, setup: 1299 },
    icon: '📊',
    category: 'AI',
    popular: true,
    link: '/ai-services'
  },

  // IT Services
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Services',
    description: 'Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with zero downtime.',
    features: ['Multi-cloud migration', 'Zero-downtime migration', 'Cost optimization', 'Performance monitoring'],
    pricing: { monthly: 499, yearly: 4990, setup: 1999 },
    icon: '☁️',
    category: 'IT',
    popular: true,
    link: '/it-services'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your digital assets from evolving threats.',
    features: ['Security assessment', 'Penetration testing', 'Incident response', 'Compliance monitoring'],
    pricing: { monthly: 399, yearly: 3990, setup: 1299 },
    icon: '🔒',
    category: 'IT',
    link: '/it-services'
  },
  {
    id: 'devops-ci-cd',
    name: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with automated CI/CD pipelines and DevOps practices.',
    features: ['CI/CD pipeline setup', 'Container orchestration', 'Infrastructure as Code', 'Deployment automation'],
    pricing: { monthly: 349, yearly: 3490, setup: 1199 },
    icon: '🔄',
    category: 'IT',
    link: '/it-services'
  },

  // Micro SAAS Services
  {
    id: 'smart-analytics',
    name: 'Smart Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with AI-powered insights and predictive analytics.',
    features: ['Real-time visualization', 'AI-powered insights', 'Custom dashboard builder', 'Automated reporting'],
    pricing: { monthly: 79, yearly: 790, setup: 199 },
    icon: '📈',
    category: 'Micro SAAS',
    popular: true,
    link: '/micro-saas'
  },
  {
    id: 'workflow-automation',
    name: 'Workflow Automation Suite',
    description: 'No-code automation platform that streamlines business processes and eliminates manual tasks.',
    features: ['Drag-and-drop builder', '500+ app integrations', 'Custom triggers', 'Team collaboration'],
    pricing: { monthly: 59, yearly: 590, setup: 99 },
    icon: '⚡',
    category: 'Micro SAAS',
    link: '/micro-saas'
  },
  {
    id: 'api-management',
    name: 'API Management Gateway',
    description: 'Enterprise-grade API management platform with security, monitoring, and analytics.',
    features: ['API gateway', 'Rate limiting', 'Authentication', 'Developer portal'],
    pricing: { monthly: 119, yearly: 1190, setup: 299 },
    icon: '🔌',
    category: 'Micro SAAS',
    link: '/micro-saas'
  },

  // Cloud Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Manager',
    description: 'Comprehensive cloud management platform for AWS, Azure, and Google Cloud.',
    features: ['Multi-cloud management', 'Cost optimization', 'Automated scaling', 'Security compliance'],
    pricing: { monthly: 149, yearly: 1490, setup: 399 },
    icon: '🌐',
    category: 'Cloud',
    link: '/it-services'
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization Studio',
    description: 'Advanced data visualization tool that transforms complex data into interactive charts.',
    features: ['Interactive charts', 'Real-time data', 'Custom templates', 'API integration'],
    pricing: { monthly: 69, yearly: 690, setup: 149 },
    icon: '📊',
    category: 'Cloud',
    link: '/micro-saas'
  },

  // Security Services
  {
    id: 'network-security',
    name: 'Network Security Monitor',
    description: 'Comprehensive network monitoring and optimization tool for enterprise networks.',
    features: ['Real-time monitoring', 'Performance analytics', 'Alert management', 'Topology mapping'],
    pricing: { monthly: 109, yearly: 1090, setup: 249 },
    icon: '🛡️',
    category: 'Security',
    link: '/it-services'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Bot',
    description: 'Intelligent chatbot that provides 24/7 customer support with human-like interactions.',
    features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Knowledge base integration'],
    pricing: { monthly: 99, yearly: 990, setup: 199 },
    icon: '💬',
    category: 'Security',
    link: '/micro-saas'
  }
];

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI', 'IT', 'Micro SAAS', 'Cloud', 'Security', 'Development'];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactClick = (service: Service) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_inquiry', {
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
            Our Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Comprehensive suite of AI, IT, and micro SAAS solutions designed to accelerate your business growth and digital transformation.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search services..."
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
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-cyan-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-cyan-400 font-medium">
                        +{service.features.length - 3} more features
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
                  <a
                    href={service.link}
                    className="cyber-button px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300"
                    onClick={() => handleContactClick(service)}
                  >
                    Learn More
                  </a>
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

      {/* Service Categories Overview */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 holographic">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive solutions across multiple technology domains to meet all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="futuristic-card p-8 text-center">
              <div className="text-6xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and predictive analytics.
              </p>
              <a href="/ai-services" className="cyber-button px-6 py-3 rounded-lg font-semibold">
                Explore AI Services
              </a>
            </div>

            <div className="futuristic-card p-8 text-center">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and infrastructure management.
              </p>
              <a href="/it-services" className="cyber-button px-6 py-3 rounded-lg font-semibold">
                Explore IT Services
              </a>
            </div>

            <div className="futuristic-card p-8 text-center">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS</h3>
              <p className="text-gray-300 mb-6">
                Innovative micro SAAS solutions designed to solve specific business problems with affordable pricing.
              </p>
              <a href="/micro-saas" className="cyber-button px-6 py-3 rounded-lg font-semibold">
                Explore Micro SAAS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 holographic">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a customized solution for your business.
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
            <p>✓ Free consultation and demo</p>
            <p>✓ Custom pricing for enterprise clients</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ 24/7 technical support</p>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default ServicesPage;