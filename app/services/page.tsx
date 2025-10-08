import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive
            innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold text-yellow-600">Most Popular</span>
                </div>
              )}
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              {service.link && (
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions to support your digital transformation journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
