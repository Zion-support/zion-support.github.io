import React from 'react';
import SEOHead from '../components/SEOHead';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      icon: '☁️',
      features: ['Cloud migration strategy', 'Infrastructure as Code', 'Auto-scaling solutions', 'Cost optimization', '24/7 monitoring'],
      benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', 'Better performance'],
      pricing: { basic: 2999, professional: 7999, enterprise: 19999 },
      useCases: ['Legacy system migration', 'Hybrid cloud setup', 'Disaster recovery', 'Global expansion']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and compliance management.',
      icon: '🛡️',
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Compliance management', 'Incident response'],
      benefits: ['Enhanced security posture', 'Regulatory compliance', 'Risk mitigation', 'Peace of mind'],
      pricing: { basic: 1999, professional: 4999, enterprise: 12999 },
      useCases: ['Security assessment', 'Compliance audit', 'Threat monitoring', 'Incident response']
    },
    {
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies and best practices.',
      icon: '🌐',
      features: ['Responsive design', 'Progressive Web Apps', 'API development', 'Performance optimization', 'SEO optimization'],
      benefits: ['Better user experience', 'Higher conversion rates', 'Mobile-first design', 'Search engine visibility'],
      pricing: { basic: 4999, professional: 12999, enterprise: 29999 },
      useCases: ['E-commerce platforms', 'Corporate websites', 'Web applications', 'Portfolio sites']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: '📱',
      features: ['Native iOS/Android apps', 'Cross-platform development', 'App store optimization', 'Push notifications', 'Offline functionality'],
      benefits: ['Increased user engagement', 'Better brand presence', 'Revenue generation', 'Customer retention'],
      pricing: { basic: 7999, professional: 19999, enterprise: 49999 },
      useCases: ['Business apps', 'E-commerce apps', 'Social platforms', 'Utility apps']
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and management services for optimal performance and security.',
      icon: '🗄️',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening'],
      benefits: ['Improved performance', 'Data integrity', 'Reduced downtime', 'Better scalability'],
      pricing: { basic: 1999, professional: 4999, enterprise: 12999 },
      useCases: ['Database optimization', 'Data migration', 'Performance tuning', 'Backup solutions']
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to help you plan, implement, and optimize your technology infrastructure.',
      icon: '🎯',
      features: ['Technology assessment', 'Digital transformation', 'IT strategy planning', 'Vendor selection', 'Change management'],
      benefits: ['Clear technology roadmap', 'Cost optimization', 'Risk mitigation', 'Competitive advantage'],
      pricing: { basic: 5000, professional: 15000, enterprise: 50000 },
      useCases: ['Digital transformation', 'Technology selection', 'Process optimization', 'Team training']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Essential IT services for small businesses',
      price: 'Starting at $1,999',
      features: [
        'Basic web development',
        'Standard support',
        'Monthly maintenance',
        'Basic security',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Comprehensive IT solutions for growing businesses',
      price: 'Starting at $4,999',
      features: [
        'Full-stack development',
        'Cloud infrastructure',
        'Advanced security',
        'Priority support',
        'Dedicated account manager',
        'Phone & email support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete IT solutions for large organizations',
      price: 'Starting at $12,999',
      features: [
        'Custom development',
        'Enterprise cloud solutions',
        'Advanced security suite',
        '24/7 support',
        'Dedicated team',
        'On-premise solutions',
        'Custom training'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead
        title="IT Services - Comprehensive Technology Solutions | Zion Tech Group"
        description="Professional IT services including cloud infrastructure, cybersecurity, web development, and digital transformation. Transform your business with cutting-edge technology."
        keywords="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, IT consulting"
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div className="min-h-screen futuristic-bg">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 fade-in-up">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
                Comprehensive IT solutions to power your digital transformation and business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
                <button className="futuristic-btn">
                  Explore Services
                </button>
                <button className="futuristic-btn futuristic-btn-secondary">
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-blue mb-4">Our IT Solutions</h2>
              <p className="text-xl text-gray-300">End-to-end IT services designed to modernize and secure your business</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="futuristic-card futuristic-card-enter p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold neon-text-purple mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold neon-text-cyan mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold neon-text-pink mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold neon-text-green mb-2">Use Cases</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2"></span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-lg font-bold neon-text-orange">${service.pricing.basic.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                  </div>

                  <button className="w-full futuristic-btn">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-pink mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the IT solution that fits your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`futuristic-card p-8 relative ${plan.popular ? 'ring-2 ring-neon-cyan' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-neon-cyan text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold neon-text mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold neon-text-blue">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-neon-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full futuristic-btn ${plan.popular ? '' : 'futuristic-btn-secondary'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can modernize your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn">
                Start Your Project
              </button>
              <button className="futuristic-btn futuristic-btn-secondary">
                Schedule Consultation
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Free consultation • Custom solutions • Expert guidance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;